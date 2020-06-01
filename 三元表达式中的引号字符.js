// 不匹配换行 也不匹配':'
let reg = /['|"|`](\/api[^:\n]+)['|"|`]/ig

let str = "isTrue ? '/api/a/b' : `/api/a/c/${d}`"

let str2 = `Upload
className="pull-left"
accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
action="/api/user/admin/import"
name="file"
showUploadList={false}
beforeUpload={handleBeforeUpload}
onChange={handleUploadChange}
>
<Button loading={uploadLoading}>
  <FormattedMessage id="user.userList.importBtn" defaultMessage="导入文件" />
</Button>
</Upload>
<Button
type="link"
className="pull-left"
href="/api/user/admin/excel-template"
target="_blank"
>
<FormattedMessage id="user.userList.templateBtn" defaultMessage="下载模版" />
</Button>`

console.log(str.match(reg))
console.log(str2.match(reg))

/**
 * [ '`/api/a/b`', '`/api/a/c/${d}`' ]
 * [ '"/api/user/admin/import"', '"/api/user/admin/excel-template"' ]
 */