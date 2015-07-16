module.exports = function (config) {
    return {
        on_start: ['<%= cordovaDir %>', '<%= tempDir %>'],
        temp: ['<%= tempDir %>'],
        docs: ['<%= docsDir %>/kibana']
    };
};