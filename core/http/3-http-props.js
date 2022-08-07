import http from 'http'
import '../global.js'

// 状态码集合
l(http.STATUS_CODES)
/**
{
  '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '103': 'Early Hints',
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
  '205': 'Reset Content',
  '206': 'Partial Content',
  '207': 'Multi-Status',
  '208': 'Already Reported',
  '226': 'IM Used',
  '300': 'Multiple Choices',
  '301': 'Moved Permanently',
  '302': 'Found',
  '303': 'See Other',
  '304': 'Not Modified',
  '305': 'Use Proxy',
  '307': 'Temporary Redirect',
  '308': 'Permanent Redirect',
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '402': 'Payment Required',
  '403': 'Forbidden',
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '408': 'Request Timeout',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Payload Too Large',
  '414': 'URI Too Long',
  '415': 'Unsupported Media Type',
  '416': 'Range Not Satisfiable',
  '417': 'Expectation Failed',
  '418': "I'm a Teapot",
  '421': 'Misdirected Request',
  '422': 'Unprocessable Entity',
  '423': 'Locked',
  '424': 'Failed Dependency',
  '425': 'Too Early',
  '426': 'Upgrade Required',
  '428': 'Precondition Required',
  '429': 'Too Many Requests',
  '431': 'Request Header Fields Too Large',
  '451': 'Unavailable For Legal Reasons',
  '500': 'Internal Server Error',
  '501': 'Not Implemented',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Timeout',
  '505': 'HTTP Version Not Supported',
  '506': 'Variant Also Negotiates',
  '507': 'Insufficient Storage',
  '508': 'Loop Detected',
  '509': 'Bandwidth Limit Exceeded',
  '510': 'Not Extended',
  '511': 'Network Authentication Required'
}
**/

// 请求方法集合
l(http.METHODS)
/**
 [
  'ACL',        'BIND',        'CHECKOUT',
  'CONNECT',    'COPY',        'DELETE',
  'GET',        'HEAD',        'LINK',
  'LOCK',       'M-SEARCH',    'MERGE',
  'MKACTIVITY', 'MKCALENDAR',  'MKCOL',
  'MOVE',       'NOTIFY',      'OPTIONS',
  'PATCH',      'POST',        'PRI',
  'PROPFIND',   'PROPPATCH',   'PURGE',
  'PUT',        'REBIND',      'REPORT',
  'SEARCH',     'SOURCE',      'SUBSCRIBE',
  'TRACE',      'UNBIND',      'UNLINK',
  'UNLOCK',     'UNSUBSCRIBE'
]
*/

// 全局的 Agent 对象
// 用于客户端管理连接持久化和重用, 是 Node http 一个重要组件
l(http.globalAgent)
