import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  RiImageLine,
  RiLink,
  RiLinkUnlink,
  RiUserLine,
} from '@remixicon/react';
import Button from '../Button/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

import styles from './Header.module.scss';
import classNames from 'classnames';

const ConnectWalletButton = ({}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks

        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} variant="primary">
                    connect <RiLink size={16} />
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    wrong network
                  </button>
                );
              }
              return (
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger>
                    <Button variant="secondary">{account.displayName}</Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    className={classNames(
                      styles.menuContent,
                      styles.accountDropdown
                    )}
                    align="end"
                  >
                    <button className={styles.link}>
                      <RiImageLine size={18} />
                      my gallery
                    </button>
                    <button className={styles.link}>
                      <RiUserLine size={18} />
                      pfp generator
                    </button>
                    <button className={classNames(styles.link, styles.dark)}>
                      <RiLinkUnlink size={18} />
                      disconnect
                    </button>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export { ConnectWalletButton };
