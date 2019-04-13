const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'xxxxx',
  user: 'xxx',
  password: 'xxxx',
  database: 'xxx',
  port: 'xxxx',
  useConnectionPooling: true
})

const query = function (sql, sqlParams, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null)
    } else {
      conn.query(sql, sqlParams, function (qerr, vals, fields) {
        conn.release()
        callback(qerr, vals, fields)
      })
    }
  })
}

module.exports = query
