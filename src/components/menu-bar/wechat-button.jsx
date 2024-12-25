import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Button from '../button/button.jsx';

import wechatBizQrCode from './wechatbiz-qrcode.jpg';

const WeChatButton = ({
    className,
    onClick
}) => (
    <div>
        <Button
            className={classNames(className)}
            onClick={onClick}
            data-tip={`<img src='${wechatBizQrCode}' alt='WeChat QR Code' class='tooltip-image' />`}
        >
            <FormattedMessage
                defaultMessage="微信公众号"
                description="Label for WeChat biz QR code button"
                id="gui.menuBar.wechatBiz"
            />
        </Button>
        <ReactTooltip html />
    </div>
);

WeChatButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

WeChatButton.defaultProps = {
    onClick: () => { }
};

export default WeChatButton;
