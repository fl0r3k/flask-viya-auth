

const rootFolders = {
  "links": [
    {
      "method": "GET",
      "rel": "collection",
      "href": "/folders/rootFolders",
      "uri": "/folders/rootFolders",
      "type": "application/vnd.sas.collection"
    },
    {
      "method": "GET",
      "rel": "self",
      "href": "/folders/rootFolders?filter=isNull(parentId)&start=0&limit=20",
      "uri": "/folders/rootFolders?filter=isNull(parentId)&start=0&limit=20",
      "type": "application/vnd.sas.collection"
    },
    {
      "method": "POST",
      "rel": "createFolder",
      "href": "/folders/rootFolders",
      "uri": "/folders/rootFolders",
      "type": "application/vnd.sas.content.folder",
      "responseType": "application/vnd.sas.content.folder"
    }
  ],
  "name": "folders",
  "accept": "application/vnd.sas.content.folder",
  "start": 0,
  "count": 5,
  "items": [
    {
      "creationTimeStamp": "2020-04-20T15:11:51.783Z",
      "modifiedTimeStamp": "2020-04-20T15:11:51.783Z",
      "createdBy": "sas.projects",
      "modifiedBy": "sas.projects",
      "id": "75c1dc98-6371-405a-bb73-0a277f154e03",
      "name": "Projects",
      "description": "Projects root folder",
      "type": "folder",
      "memberCount": 0,
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "uri": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/@root/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/@root/members/@new/name?value={newname}&type=folder",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/75c1dc98-6371-405a-bb73-0a277f154e03/members/@new/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/75c1dc98-6371-405a-bb73-0a277f154e03/members/@new/name?value={newname}&type={newtype}"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "uri": "/folders/ancestors?childUri=/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "uri": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "type": "application/vnd.sas.content.folder",
          "responseType": "application/vnd.sas.content.folder"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "uri": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03"
        },
        {
          "method": "DELETE",
          "rel": "deleteRecursively",
          "href": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03?recursive=true",
          "uri": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03?recursive=true"
        },
        {
          "method": "GET",
          "rel": "members",
          "href": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03/members",
          "uri": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03/members",
          "type": "application/vnd.sas.collection",
          "itemType": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03/members",
          "uri": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "uri": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "uri": "/folders/folders/75c1dc98-6371-405a-bb73-0a277f154e03",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders",
          "uri": "/folders/folders",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        }
      ],
      "version": 1
    },
    {
      "creationTimeStamp": "2020-04-20T15:16:55.958Z",
      "modifiedTimeStamp": "2020-04-20T15:19:44.698Z",
      "createdBy": "sas.modelRepository",
      "modifiedBy": "sas.dataMining",
      "id": "6ffbd689-df15-4c30-9a88-647111887946",
      "name": "Model Repositories",
      "type": "folder",
      "memberCount": 2,
      "iconUri": "sas-icon://modelRepository/RootFolder",
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "uri": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/@root/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/@root/members/@new/name?value={newname}&type=folder",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/6ffbd689-df15-4c30-9a88-647111887946/members/@new/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/6ffbd689-df15-4c30-9a88-647111887946/members/@new/name?value={newname}&type={newtype}"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "uri": "/folders/ancestors?childUri=/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "uri": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "type": "application/vnd.sas.content.folder",
          "responseType": "application/vnd.sas.content.folder"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "uri": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946"
        },
        {
          "method": "DELETE",
          "rel": "deleteRecursively",
          "href": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946?recursive=true",
          "uri": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946?recursive=true"
        },
        {
          "method": "GET",
          "rel": "members",
          "href": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946/members",
          "uri": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946/members",
          "type": "application/vnd.sas.collection",
          "itemType": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946/members",
          "uri": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "uri": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "uri": "/folders/folders/6ffbd689-df15-4c30-9a88-647111887946",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders",
          "uri": "/folders/folders",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        }
      ],
      "version": 1
    },
    {
      "creationTimeStamp": "2020-04-20T15:11:49.299Z",
      "modifiedTimeStamp": "2020-04-24T16:23:53.067Z",
      "createdBy": "sas.naturalLanguageUnderstanding",
      "modifiedBy": "sas.reports",
      "id": "780e5bc0-1fba-44aa-9481-7e74a52851a4",
      "name": "Products",
      "description": "Products folder for samples, canned objects and other SAS-provided content.",
      "type": "folder",
      "memberCount": 4,
      "properties": {
        "allowMove": "false",
        "uuid": "58dc1cca-4020-48ee-89f0-2e8a1d8174f6"
      },
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "uri": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4/members/@new/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4/members/@new/name?value={newname}&type={newtype}"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "uri": "/folders/ancestors?childUri=/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "uri": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4"
        },
        {
          "method": "DELETE",
          "rel": "deleteRecursively",
          "href": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4?recursive=true",
          "uri": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4?recursive=true"
        },
        {
          "method": "GET",
          "rel": "members",
          "href": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4/members",
          "uri": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4/members",
          "type": "application/vnd.sas.collection",
          "itemType": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4/members",
          "uri": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "uri": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "uri": "/folders/folders/780e5bc0-1fba-44aa-9481-7e74a52851a4",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders",
          "uri": "/folders/folders",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        }
      ],
      "version": 1
    },
    {
      "creationTimeStamp": "2020-04-20T15:12:22.489Z",
      "modifiedTimeStamp": "2020-04-28T15:09:25.330Z",
      "createdBy": "anonymousUser",
      "modifiedBy": "robert.soszynski",
      "id": "5ecb4615-ce3f-414c-9fe3-12c8b2930832",
      "name": "Public",
      "description": "Public folder for general access.",
      "type": "folder",
      "memberCount": 1,
      "properties": {
        "allowMove": "false",
        "uuid": "935842da-9ba0-479c-99e3-6a4e489322fc"
      },
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "uri": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832/members/@new/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832/members/@new/name?value={newname}&type={newtype}"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "uri": "/folders/ancestors?childUri=/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "uri": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832"
        },
        {
          "method": "DELETE",
          "rel": "deleteRecursively",
          "href": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832?recursive=true",
          "uri": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832?recursive=true"
        },
        {
          "method": "GET",
          "rel": "members",
          "href": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832/members",
          "uri": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832/members",
          "type": "application/vnd.sas.collection",
          "itemType": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832/members",
          "uri": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "uri": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "uri": "/folders/folders/5ecb4615-ce3f-414c-9fe3-12c8b2930832",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders",
          "uri": "/folders/folders",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        }
      ],
      "version": 1
    },
    {
      "creationTimeStamp": "2020-04-20T15:12:22.267Z",
      "modifiedTimeStamp": "2020-06-29T10:10:52.554Z",
      "createdBy": "anonymousUser",
      "modifiedBy": "piotr.florczyk",
      "id": "c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
      "name": "Users",
      "description": "Base Folder for all user folders.",
      "type": "userRoot",
      "memberCount": 8,
      "properties": {
        "allowMove": "false",
        "uuid": "e911697e-fe53-497c-a27c-909c757ba04a"
      },
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/@new/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/@new/name?value={newname}&type={newtype}"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/ancestors?childUri=/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add"
        },
        {
          "method": "DELETE",
          "rel": "deleteRecursively",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add?recursive=true",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add?recursive=true"
        },
        {
          "method": "GET",
          "rel": "members",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.collection",
          "itemType": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders",
          "uri": "/folders/folders",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        }
      ],
      "version": 1
    }
  ],
  "limit": 20,
  "version": 2
};

const usersFolder = {
  "links": [
    {
      "method": "GET",
      "rel": "collection",
      "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
      "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
      "type": "application/vnd.sas.collection"
    },
    {
      "method": "GET",
      "rel": "self",
      "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members?followReferences=false&recursive=false&start=0&limit=20",
      "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members?followReferences=false&recursive=false&start=0&limit=20",
      "type": "application/vnd.sas.collection"
    },
    {
      "method": "POST",
      "rel": "createMember",
      "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
      "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
      "type": "application/vnd.sas.content.folder.member",
      "responseType": "application/vnd.sas.content.folder.member"
    }
  ],
  "name": "members",
  "accept": "application/vnd.sas.content.folder.member",
  "start": 0,
  "count": 8,
  "items": [
    {
      "creationTimeStamp": "2020-04-21T08:39:49.342Z",
      "modifiedTimeStamp": "2020-04-21T08:39:49.342Z",
      "createdBy": "mariusz.janeczko",
      "modifiedBy": "mariusz.janeczko",
      "id": "a34470fc-86d4-4eb9-a99d-d834531ab0c0",
      "uri": "/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c",
      "added": "2020-04-21T08:39:49.369Z",
      "type": "child",
      "name": "mariusz.janeczko",
      "description": "The user folder for mariusz.janeczko",
      "parentFolderUri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
      "contentType": "userFolder",
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "GET",
          "rel": "up",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "getResource",
          "href": "/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c",
          "uri": "/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c",
          "type": "application/vnd.sas.summary"
        },
        {
          "method": "PUT",
          "rel": "putResource",
          "href": "/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c",
          "uri": "/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c"
        },
        {
          "method": "DELETE",
          "rel": "deleteResource",
          "href": "/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c",
          "uri": "/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c",
          "uri": "/folders/ancestors?childUri=/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0/name?value={newname}&type={newtype}",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/a34470fc-86d4-4eb9-a99d-d834531ab0c0",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c/members",
          "uri": "/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c/members/@new/name?value={newname}&type=folder"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/3f87f7f1-f91c-4f6d-84d2-38e21419416c",
          "type": "application/vnd.sas.content.folder"
        }
      ],
      "version": 2
    },
    {
      "creationTimeStamp": "2020-04-21T11:57:09.747Z",
      "modifiedTimeStamp": "2020-04-21T11:57:09.747Z",
      "createdBy": "mateusz.staniaszek",
      "modifiedBy": "mateusz.staniaszek",
      "id": "f425ee5b-c9de-4c5f-ba65-b75eaffea405",
      "uri": "/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff",
      "added": "2020-04-21T11:57:09.755Z",
      "type": "child",
      "name": "mateusz.staniaszek",
      "description": "The user folder for mateusz.staniaszek",
      "parentFolderUri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
      "contentType": "userFolder",
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "GET",
          "rel": "up",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "getResource",
          "href": "/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff",
          "uri": "/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff",
          "type": "application/vnd.sas.summary"
        },
        {
          "method": "PUT",
          "rel": "putResource",
          "href": "/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff",
          "uri": "/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff"
        },
        {
          "method": "DELETE",
          "rel": "deleteResource",
          "href": "/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff",
          "uri": "/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff",
          "uri": "/folders/ancestors?childUri=/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405/name?value={newname}&type={newtype}",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/f425ee5b-c9de-4c5f-ba65-b75eaffea405",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff/members",
          "uri": "/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff/members/@new/name?value={newname}&type=folder"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/0a6a4890-45c1-4a12-b4d3-5949d664deff",
          "type": "application/vnd.sas.content.folder"
        }
      ],
      "version": 2
    },
    {
      "creationTimeStamp": "2020-06-29T10:10:52.516Z",
      "modifiedTimeStamp": "2020-06-29T10:10:52.516Z",
      "createdBy": "piotr.florczyk",
      "modifiedBy": "piotr.florczyk",
      "id": "4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
      "uri": "/folders/folders/2399890d-e003-4357-a002-896f659ecbc5",
      "added": "2020-06-29T10:10:52.544Z",
      "type": "child",
      "name": "piotr.florczyk",
      "description": "The user folder for piotr.florczyk",
      "parentFolderUri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
      "contentType": "userFolder",
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "GET",
          "rel": "up",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "getResource",
          "href": "/folders/folders/2399890d-e003-4357-a002-896f659ecbc5",
          "uri": "/folders/folders/2399890d-e003-4357-a002-896f659ecbc5",
          "type": "application/vnd.sas.summary"
        },
        {
          "method": "PUT",
          "rel": "putResource",
          "href": "/folders/folders/2399890d-e003-4357-a002-896f659ecbc5",
          "uri": "/folders/folders/2399890d-e003-4357-a002-896f659ecbc5"
        },
        {
          "method": "DELETE",
          "rel": "deleteResource",
          "href": "/folders/folders/2399890d-e003-4357-a002-896f659ecbc5",
          "uri": "/folders/folders/2399890d-e003-4357-a002-896f659ecbc5"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/2399890d-e003-4357-a002-896f659ecbc5",
          "uri": "/folders/ancestors?childUri=/folders/folders/2399890d-e003-4357-a002-896f659ecbc5",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3/name?value={newname}&type={newtype}",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/4743ab6c-d2bf-4611-8487-2e9ae9484cd3",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/2399890d-e003-4357-a002-896f659ecbc5/members",
          "uri": "/folders/folders/2399890d-e003-4357-a002-896f659ecbc5/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/2399890d-e003-4357-a002-896f659ecbc5/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/2399890d-e003-4357-a002-896f659ecbc5/members/@new/name?value={newname}&type=folder"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/2399890d-e003-4357-a002-896f659ecbc5",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/2399890d-e003-4357-a002-896f659ecbc5",
          "type": "application/vnd.sas.content.folder"
        }
      ],
      "version": 2
    },
    {
      "creationTimeStamp": "2020-04-20T15:53:48.282Z",
      "modifiedTimeStamp": "2020-04-20T15:53:48.282Z",
      "createdBy": "robert.soszynski",
      "modifiedBy": "robert.soszynski",
      "id": "31d21fde-f636-4919-8b68-ab3878dd5dfb",
      "uri": "/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b",
      "added": "2020-04-20T15:53:48.287Z",
      "type": "child",
      "name": "robert.soszynski",
      "description": "The user folder for robert.soszynski",
      "parentFolderUri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
      "contentType": "userFolder",
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "GET",
          "rel": "up",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "getResource",
          "href": "/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b",
          "uri": "/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b",
          "type": "application/vnd.sas.summary"
        },
        {
          "method": "PUT",
          "rel": "putResource",
          "href": "/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b",
          "uri": "/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b"
        },
        {
          "method": "DELETE",
          "rel": "deleteResource",
          "href": "/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b",
          "uri": "/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b",
          "uri": "/folders/ancestors?childUri=/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb/name?value={newname}&type={newtype}",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/31d21fde-f636-4919-8b68-ab3878dd5dfb",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b/members",
          "uri": "/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b/members/@new/name?value={newname}&type=folder"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/9a9f7937-cbad-4395-aa59-b3571e9dec9b",
          "type": "application/vnd.sas.content.folder"
        }
      ],
      "version": 2
    },
    {
      "creationTimeStamp": "2020-04-20T15:19:42.316Z",
      "modifiedTimeStamp": "2020-04-20T15:19:42.316Z",
      "createdBy": "sas.dataMining",
      "modifiedBy": "sas.dataMining",
      "id": "3b08978f-5bb6-4421-8547-cb361326973c",
      "uri": "/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1",
      "added": "2020-04-20T15:19:42.336Z",
      "type": "child",
      "name": "sas.dataMining",
      "description": "The user folder for sas.dataMining",
      "parentFolderUri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
      "contentType": "userFolder",
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "GET",
          "rel": "up",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "getResource",
          "href": "/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1",
          "uri": "/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1",
          "type": "application/vnd.sas.summary"
        },
        {
          "method": "PUT",
          "rel": "putResource",
          "href": "/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1",
          "uri": "/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1"
        },
        {
          "method": "DELETE",
          "rel": "deleteResource",
          "href": "/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1",
          "uri": "/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1",
          "uri": "/folders/ancestors?childUri=/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c/name?value={newname}&type={newtype}",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/3b08978f-5bb6-4421-8547-cb361326973c",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1/members",
          "uri": "/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1/members/@new/name?value={newname}&type=folder"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/7a180042-c80c-48b4-b1bb-f71fba4925f1",
          "type": "application/vnd.sas.content.folder"
        }
      ],
      "version": 2
    },
    {
      "creationTimeStamp": "2020-04-20T15:18:21.399Z",
      "modifiedTimeStamp": "2020-04-20T15:18:21.399Z",
      "createdBy": "sas.dataMiningModels",
      "modifiedBy": "sas.dataMiningModels",
      "id": "1a48722b-484a-442d-9f28-6bb7f88ea38c",
      "uri": "/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437",
      "added": "2020-04-20T15:18:21.414Z",
      "type": "child",
      "name": "sas.dataMiningModels",
      "description": "The user folder for sas.dataMiningModels",
      "parentFolderUri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
      "contentType": "userFolder",
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "GET",
          "rel": "up",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "getResource",
          "href": "/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437",
          "uri": "/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437",
          "type": "application/vnd.sas.summary"
        },
        {
          "method": "PUT",
          "rel": "putResource",
          "href": "/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437",
          "uri": "/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437"
        },
        {
          "method": "DELETE",
          "rel": "deleteResource",
          "href": "/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437",
          "uri": "/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437",
          "uri": "/folders/ancestors?childUri=/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c/name?value={newname}&type={newtype}",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/1a48722b-484a-442d-9f28-6bb7f88ea38c",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437/members",
          "uri": "/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437/members/@new/name?value={newname}&type=folder"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/bcd3fc4a-2298-48f7-b84a-fd25c3972437",
          "type": "application/vnd.sas.content.folder"
        }
      ],
      "version": 2
    },
    {
      "creationTimeStamp": "2020-04-20T15:18:51.239Z",
      "modifiedTimeStamp": "2020-04-20T15:18:51.239Z",
      "createdBy": "sas.forecastingStrategies",
      "modifiedBy": "sas.forecastingStrategies",
      "id": "fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
      "uri": "/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b",
      "added": "2020-04-20T15:18:51.252Z",
      "type": "child",
      "name": "sas.forecastingStrategies",
      "description": "The user folder for sas.forecastingStrategies",
      "parentFolderUri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
      "contentType": "userFolder",
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "GET",
          "rel": "up",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "getResource",
          "href": "/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b",
          "uri": "/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b",
          "type": "application/vnd.sas.summary"
        },
        {
          "method": "PUT",
          "rel": "putResource",
          "href": "/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b",
          "uri": "/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b"
        },
        {
          "method": "DELETE",
          "rel": "deleteResource",
          "href": "/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b",
          "uri": "/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b",
          "uri": "/folders/ancestors?childUri=/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad/name?value={newname}&type={newtype}",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/fce4ac2f-3539-45ea-a288-d27d2ffa1aad",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b/members",
          "uri": "/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b/members/@new/name?value={newname}&type=folder"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/14b90229-ac02-4ff8-a31e-95bcd8320f0b",
          "type": "application/vnd.sas.content.folder"
        }
      ],
      "version": 2
    },
    {
      "creationTimeStamp": "2020-04-20T15:34:00.310Z",
      "modifiedTimeStamp": "2020-04-20T15:34:00.310Z",
      "createdBy": "sasboot",
      "modifiedBy": "sasboot",
      "id": "67ce26d2-7154-46d0-bb6a-16ed565aede3",
      "uri": "/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d",
      "added": "2020-04-20T15:34:00.323Z",
      "type": "child",
      "name": "sasboot",
      "description": "The user folder for sasboot",
      "parentFolderUri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
      "contentType": "userFolder",
      "links": [
        {
          "method": "GET",
          "rel": "self",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "GET",
          "rel": "up",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add",
          "type": "application/vnd.sas.content.folder"
        },
        {
          "method": "GET",
          "rel": "getResource",
          "href": "/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d",
          "uri": "/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d",
          "type": "application/vnd.sas.summary"
        },
        {
          "method": "PUT",
          "rel": "putResource",
          "href": "/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d",
          "uri": "/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d"
        },
        {
          "method": "DELETE",
          "rel": "deleteResource",
          "href": "/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d",
          "uri": "/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d"
        },
        {
          "method": "GET",
          "rel": "ancestors",
          "href": "/folders/ancestors?childUri=/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d",
          "uri": "/folders/ancestors?childUri=/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d",
          "type": "application/vnd.sas.content.folder.ancestor"
        },
        {
          "method": "PUT",
          "rel": "update",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "DELETE",
          "rel": "delete",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3"
        },
        {
          "method": "PUT",
          "rel": "validateRename",
          "href": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3/name?value={newname}&type={newtype}",
          "uri": "/folders/commons/validations/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3/name?value={newname}&type={newtype}",
          "type": "application/vnd.sas.validation"
        },
        {
          "method": "GET",
          "rel": "transferExport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3",
          "responseType": "application/vnd.sas.transfer.object"
        },
        {
          "method": "PUT",
          "rel": "transferImportUpdate",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members/67ce26d2-7154-46d0-bb6a-16ed565aede3",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "transferImport",
          "href": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "uri": "/folders/folders/c8f14c00-eab4-4ce5-bb9d-9dae5f2b7add/members",
          "type": "application/vnd.sas.transfer.object",
          "responseType": "application/vnd.sas.summary"
        },
        {
          "method": "POST",
          "rel": "addMember",
          "href": "/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d/members",
          "uri": "/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d/members",
          "type": "application/vnd.sas.content.folder.member"
        },
        {
          "method": "PUT",
          "rel": "validateNewMemberName",
          "href": "/folders/commons/validations/folders/523f8c8d-a043-4415-8571-68099151dc2d/members/@new/name?value={newname}&type=folder",
          "uri": "/folders/commons/validations/folders/523f8c8d-a043-4415-8571-68099151dc2d/members/@new/name?value={newname}&type=folder"
        },
        {
          "method": "POST",
          "rel": "createChild",
          "href": "/folders/folders?parentFolderUri=/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d",
          "uri": "/folders/folders?parentFolderUri=/folders/folders/523f8c8d-a043-4415-8571-68099151dc2d",
          "type": "application/vnd.sas.content.folder"
        }
      ],
      "version": 2
    }
  ],
  "limit": 20,
  "version": 2
};

module.exports = {
  rootFolders,
  usersFolder
};
