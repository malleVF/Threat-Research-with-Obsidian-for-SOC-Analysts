---
type: moc
cssclasses:
  - wide-page
file_created: 2024-03-26 @ 21:46 (UTC +01:00)
file_modified:
---
# ♻️ Changes on <%tp.file.folder(false)%>  Files

-  # #mcl/list-card
> [! note] Created notes
> ```dataview
> TABLE WITHOUT ID
> file.link,
> file.folder,
> type,
> file.ctime
> WHERE file.folder = this.file.folder
> SORT file.ctime DESC
> LIMIT 20
>```

-  #  
> [! warning ] Modified notes
> ```dataview
> TABLE WITHOUT ID
> file.link,
> file.folder,
> type,
> file.mtime
> WHERE file.folder = this.file.folder
> SORT file.mtime DESC
> LIMIT 20
>```