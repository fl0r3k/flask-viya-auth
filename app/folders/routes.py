from flask import render_template
from flask_login import login_required, current_user

from copy import deepcopy

from app import oauth_manager
from app.folders import bp

@bp.route("/rootFolders")
@login_required
def root_folders():
    sas = oauth_manager.create_client('sas')
    token = current_user.token
    resp = sas.get('/folders/rootFolders', token=token, headers={'Content-Type':'application/json'})
    return resp.json()

@bp.route("/folder/<string:id>")
@login_required
def folder(id):
    sas = oauth_manager.create_client('sas')
    token = current_user.token
    # &limit=2147483648
    resp = sas.get(f'/folders/{id}/members?recursive=true', token=token, headers={'Content-Type':'application/json'})
    return resp.json()

@bp.route("/folderTree/<string:id>")
@login_required
def folders_tree_2(id):
    sas = oauth_manager.create_client('sas')
    token = current_user.token
    # &limit=2147483648
    resp = sas.get(f'/folders/{id}/members?recursive=true', token=token, headers={'Content-Type':'application/json'})
    return resp.json()

@bp.route("/foldersTree")
@login_required
def folders_tree():
    sas = oauth_manager.create_client('sas')
    token = current_user.token
    resp = sas.get('/folders/rootFolders', token=token, headers={'Content-Type':'application/json'})
    rootFolders = resp.json()['items']
    for rf in rootFolders:
        rf['uri'] = '/folders/folders/' + rf['id']
        # del rf['links']
    folders = deepcopy(rootFolders)

    for rf in rootFolders:
        id = rf['id']
        resp = sas.get(f'/folders/folders/{id}/members?recursive=true&limit=100000', token=token, headers={'Content-Type':'application/json'})
        # print(resp.json());
        folders = folders + resp.json()['items']

    for f in folders:
        del f['links']

    return { 'items': folders }
