import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Button from '../button/button.jsx';

import qqGroupQrCode from './qq-group-qrcode.png';

const QQGroupButton = ({
    className,
    onClick
}) => (
    <div>
        <Button
            className={classNames(className)}
            onClick={onClick}
            data-tip={`<img src='${qqGroupQrCode}' alt='QQ Group QR Code' class='tooltip-image' />`}
        >
            <FormattedMessage
                defaultMessage="😻QQ群"
                description="Label for QQ Group QR code button"
                id="gui.menuBar.qqGroup"
            />
        </Button>
        <ReactTooltip html />
    </div>
);

QQGroupButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

QQGroupButton.defaultProps = {
    onClick: () => { }
};

export default QQGroupButton;
