fx_version 'cerulean'

lua54 'yes'
games {  'gta5' }


name 'kt_lib'
author 'kitotake'
version '3.30.7'
repository 'https://github.com/kitotake/kt_lib'
description 'A library of shared functions to utilise in other resources.'

dependencies {
    '/server:7290',
    '/onesync',
}

ui_page 'web/build/index.html'

files {
    'init.lua',
    'resource/settings.lua',
    'imports/**/client.lua',
    'imports/**/shared.lua',
    'web/build/index.html',
    'web/build/**/*',
    'locales/*.json',
}

shared_script 'resource/init.lua'

shared_scripts {
    'resource/**/shared.lua',
    -- 'resource/**/shared/*.lua'
}

client_scripts {
    'resource/**/client.lua',
    'resource/**/client/*.lua'
}

server_scripts {
    'imports/callback/server.lua',
    'imports/getFilesInDirectory/server.lua',
    'resource/**/server.lua',
    'resource/**/server/*.lua',
}
