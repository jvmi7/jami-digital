import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { RiImageLine, RiLink, RiLinkUnlink, RiUserLine } from '@remixicon/react';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { useDisconnect } from 'wagmi';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Button from '@/components/Button/Button';
import styles from '@/components/ConnectWalletButton/ConnectWalletButton.module.scss';

const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        const { disconnect } = useDisconnect();

        const [open, setOpen] = useState(false);

        const handleMenuItemClick = (callback?: any) => {
          callback?.();
          setOpen(false);
        };

        const isMobile = useMedia('screen and (max-width: 600px)');

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
                <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                  <DropdownMenuTrigger>
                    <Button variant="secondary" isIcon={isMobile}>
                      {isMobile ? <RiUserLine size={18} /> : account.displayName}
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    className={classNames(styles.menuContent, styles.accountDropdown)}
                    align="end"
                  >
                    <DropdownMenuItem asChild>
                      <Link href="/swatches/gallery">
                        <button className={styles.link} onClick={() => handleMenuItemClick()}>
                          <RiImageLine size={18} />
                          my gallery
                        </button>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <button
                        className={classNames(styles.link, styles.dark)}
                        onClick={() => {
                          handleMenuItemClick(disconnect);
                        }}
                      >
                        <RiLinkUnlink size={18} />
                        disconnect
                      </button>
                    </DropdownMenuItem>
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
