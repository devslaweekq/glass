const DOWNLOAD_CHECKSUMS = {
    ollama: {
        dmg: {
            url: 'https://ollama.com/download/Ollama.dmg',
            sha256: null, // TODO: 실제 체크섬 추가 필요 - null일 경우 체크섬 검증 스킵됨
        },
        exe: {
            url: 'https://ollama.com/download/OllamaSetup.exe',
            sha256: null, // TODO: 실제 체크섬 추가 필요 - null일 경우 체크섬 검증 스킵됨
        },
        linux: {
            url: 'curl -fsSL https://ollama.com/install.sh | sh',
            sha256: null, // TODO: 실제 체크섬 추가 필요 - null일 경우 체크섬 검증 스킵됨
        },
    },
};

module.exports = { DOWNLOAD_CHECKSUMS };
