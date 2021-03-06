/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/3/19
 * @description 
 */
const minimatch = require('minimatch')
const { promisify } = require('util')
const { join } = require('path')
const { resolve } = require('url')
const { loadFront } = require('picidae/lib/lib/utils/loadFront')
const cp = require('child_process')

const {
  publicPath = '/',
  host = 'http://eux.baidu.com/'
} = require('../../picidae.config')

const getStagedFiles = require('./staged-git-files')
const { detail, simple, TITLE } = require('./formatMessage')

getStagedFiles.includeContent = true
getStagedFiles.cwd = join(__dirname, '../..')
getStagedFiles.debug = true


function adaptorToMessage({ content, filename }) {
  const { __content, ...meta } = loadFront(content)

  const url = resolve(host,
    resolve(
      publicPath,
      filename.replace(/^doc(?=\/)/, 'blog').replace(/\.(md|markdown)/i, '')
    )
  )
  // doc/fe/name -> blog/fe/name
  return {
    title: meta.title,
    url: url,
    author: meta.author
  }
}

async function sendMessage(message) {
  try {
    // console.log('process.env.ROBOT_REQUEST', process.env.ROBOT_REQUEST)
    // console.log('process.env.ROBOT_TOKEN', process.env.ROBOT_TOKEN)
    const data = await promisify(cp.exec)(
      `curl -s ${JSON.stringify(process.env.ROBOT_REQUEST)}` +
      ` -d ${JSON.stringify(
          JSON.stringify({
            'to': 1608284,
            'access_token': process.env.ROBOT_TOKEN,
            'msg_type': 'text',
            'content': message
          })
        )}`
    )
    console.log(data)
  } catch (ex) {
    console.error(ex)
  }
}

;(async () => {
  const p = promisify(getStagedFiles)
  const statusList = await p(
    // diff-filter
    'ACDMRTUX',
    // commit_a...commit_b
    process.env.TRAVIS_COMMIT_RANGE || 'HEAD'
  )
  console.log(statusList.map(state => ({ filename: state.filename, status: state.status })))
  const mdStatusList = statusList
    .filter(status => {
      return minimatch(status.filename, 'doc/**/*.{md,MD,markdown}', { matchBase: true })
    })

  if (!mdStatusList.length) {
    console.log('未发现改动的markdown文件')
    return
  }

  const messageList = []
  const format = function (change) {
    if (mdStatusList.length > 1) {
      return simple(change)
    }
    return detail(change)
  }
  mdStatusList
    .some(change => {
      if (messageList.length === 5) {
        messageList.push('...')
        return true
      }
      switch (change.status) {
        case 'Added':
        // case 'Modified':
          messageList.push(detail(
            adaptorToMessage(change)
          ))
          break
        // case 'Copied':
        // case 'Deleted':
        // case 'Renamed':
        // case 'Type-Change':
        // // Type-Change (T) [i.e. regular file, symlink, submodule, etc.]
        // case 'Unmerged':
        // case 'Unknown':
      }
    })

  console.log('messageList', messageList)
  if (messageList.length) {
    await sendMessage([TITLE].concat(messageList).join('\n'))
  }
})()