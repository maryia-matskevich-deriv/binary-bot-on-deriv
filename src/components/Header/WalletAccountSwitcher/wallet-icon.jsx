import React from 'react';
import PropTypes from 'prop-types';
import './wallet-icon.scss';

const WalletIcon = ({ currency, has_wallet_account, is_virtual, currency_icon, is_wallet_dropdown = false }) => {
    const wallet_icon_path = '/public/images/wallet/';
    const default_currency_icon_path = `/public/images/currency/ic-currency-${currency_icon}.svg`;
    const isWalletIcon = _currency => {
        const wallet_icons = ['btc', 'eth', 'ltc', 'usdc', 'usdt', 'eusdt'];
        return wallet_icons.includes(_currency.toLowerCase());
    };

    return (
        <div className='acc-info__wallets-container'>
            <div className='app-icon__top-icon'>
                <div className='wallet-icon'>
                    <img src={`${wallet_icon_path}ic-wallet-options-light.svg`} />
                </div>
            </div>
            <div className={`${is_wallet_dropdown && 'app-icon__bottom-icon'}`}>
                <div className='wallet-icon wallet-icon--small wallet-icon__default-bg wallet-card__usd-bg'>
                    <img
                        src={
                            has_wallet_account
                                ? isWalletIcon(currency) && !is_virtual
                                    ? `${wallet_icon_path}${currency_icon}.svg`
                                    : is_virtual
                                        ? `${wallet_icon_path}ic-wallet-deriv-demo-light.svg`
                                        : default_currency_icon_path
                                : default_currency_icon_path
                        }
                    />
                </div>
            </div>
        </div>
    );
};

WalletIcon.propTypes = {
    currency: PropTypes.string,
    has_wallet_account: PropTypes.bool,
    is_virtual: PropTypes.bool,
    currency_icon: PropTypes.string,
    is_wallet_dropdown: PropTypes.bool,
};

export default WalletIcon;
