export const MAX_MOBILE_WIDTH = 813;

export const AppConstants = Object.freeze({
    STORAGE_ACTIVE_TOKEN: 'activeToken',
});

export const APP_ID_MAP = Object.freeze({
    production: Object.freeze({
        'bot.deriv.com': '29864',
        'bot.deriv.me': '29864', // todo: change when will be registered
        'bot.deriv.be': '31223',
    }),
    staging: Object.freeze({
        'staging-bot.deriv.com': '29934',
        'staging-bot.deriv.be': '31248',
    }),
    dev: Object.freeze({
        localhost: '16014',
        'localbot.binary.sx': '16014',
    }),
});
