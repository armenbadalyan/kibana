module.exports = function (config) {
    return {
        options: {
            path: '<%= cordovaDir %>',
            cli: 'cordova' // cca or cordova
        },
        cordova: {
            options: {
                command: ['create', 'platform', 'plugin', 'build'],
                platforms: ['ios', 'android'],
                plugins: ['device', 'dialogs'],
                path: '<%= destDir %>',
                id: 'com.exadel.kibanamobile',
                name: 'KibanaMobile'
            }
        },
        create: {
            options: {
                command: 'create',
                id: 'com.exadel.kibanamobile',
                name: 'KibanaMobile'
            }
        },
        add_platforms: {
            options: {
                command: 'platform',
                action: 'add',
                platforms: ['ios', 'android']
            }
        },
        add_plugins: {
            options: {
                command: 'plugin',
                action: 'add',
                plugins: [
                    'battery-status',
                    'camera',
                    'console',
                    'contacts',
                    'device',
                    'device-motion',
                    'device-orientation',
                    'dialogs',
                    'file',
                    'geolocation',
                    'globalization',
                    'inappbrowser',
                    'media',
                    'media-capture',
                    'network-information',
                    'splashscreen',
                    'vibration'
                ]
            }
        },
        remove_plugin: {
            options: {
                command: 'plugin',
                action: 'rm',
                plugins: [
                    'battery-status'
                ]
            }
        },
        build_ios: {
            options: {
                command: 'build',
                platforms: ['ios']
            }
        },
        build_android: {
            options: {
                command: 'build',
                platforms: ['android']
            }
        },
        emulate_android: {
            options: {
                command: 'emulate',
                platforms: ['android'],
                args: ['--target', 'Nexus5']
            }
        }
    };
};