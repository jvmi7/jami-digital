import { useAccount } from 'wagmi';
import styles from './GalleryPage.module.scss';
import { useEvmWalletNFTs } from '@moralisweb3/next';
import { SwatchImagePreview } from '../SwatchImagePreview/SwatchImagePreview';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../../components/ui/context-menu';
import { SaveDialog } from '../SaveDialog/SaveDialog';
import { generateCloudflareIpfsUrl } from '../../helpers';
import { PageFooter } from '../PageFooter/PageFooter';
import { RiExternalLinkFill } from '@remixicon/react';
import { externalLinks } from '../constants';
import { ConnectWalletButton } from '../Header/ConnectWalletButton';
import { Header } from '../../components/HomePage/Header/Header';
import { themes } from '../../styles/theme';

const GalleryPage = () => {
  const { address } = useAccount();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [modalTokenID, setModalTokenID] = useState<string>('');

  const { data: nfts, isFetching } = useEvmWalletNFTs({
    chain: '0x2105',
    address: address || '',
    // address: '0x2245831B784B4E1030844206288BC1B23b11DeF7',
    tokenAddresses: ['0x13dc8261FCe63499Aa25DEB512bb1827B411b83B'],
  });

  useEffect(() => {
    if (!address) {
      router.push('/swatches');
    }
  }, [address, router]);

  const title = isFetching ? (
    <>
      <p>loading...</p>
    </>
  ) : nfts?.length ? (
    <>
      <h1>a gallery of swatches,</h1>
      <p>
        curated by <span>you</span>.
      </p>
    </>
  ) : (
    <>
      <h1>no swatches found</h1>
      <p>become a curator by purchasing a swatch on a secondary marketplace</p>
    </>
  );

  return (
    <div className={styles.container}>
      <Header
        backgroundColor="#eeeeee"
        foregroundColor="currentColor"
        theme="LIGHT"
        button={<ConnectWalletButton />}
      />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        {!isFetching && !nfts?.length && (
          <div className={styles.purchaseContainer}>
            <a
              href={externalLinks.opensea}
              target="_blank"
              rel="noreferrer"
              className={styles.opensea}
            >
              <button>
                <span>buy on opensea</span>
                <RiExternalLinkFill size={16} />
              </button>
            </a>
            <a
              href={externalLinks.rarible}
              target="_blank"
              rel="noreferrer"
              className={styles.rarible}
            >
              <button>
                <span>buy on rarible</span>
                <RiExternalLinkFill size={16} />
              </button>
            </a>
            <a
              href={externalLinks.magiceden}
              target="_blank"
              rel="noreferrer"
              className={styles.magiceden}
            >
              <button>
                <span>buy on magic eden</span>
                <RiExternalLinkFill size={16} />
              </button>
            </a>
          </div>
        )}
        <ContextMenu modal={false}>
          <ContextMenuTrigger asChild>
            <div className={styles.galleryContainer}>
              {nfts?.map((_nft: any, index: number) => {
                const nft = _nft._data;
                const imageUrl =
                  generateCloudflareIpfsUrl(nft.metadata?.image) || '';
                const name = nft.metadata?.name || '';
                const animationDelay = index * 0.05;
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: animationDelay,
                      },
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    key={nft.tokenId}
                    className={styles.swatchContainer}
                    onContextMenu={() => {
                      setModalTokenID(nft.tokenId);
                    }}
                    onClick={() => {
                      setModalTokenID(nft.tokenId);
                      setIsOpen(true);
                    }}
                  >
                    <div className={styles.overlay}>
                      <span>{name}</span>
                    </div>

                    <SwatchImagePreview key={nft.tokenId} imgUrl={imageUrl} />
                  </motion.div>
                );
              })}
            </div>
          </ContextMenuTrigger>

          <ContextMenuContent>
            <ContextMenuItem
              className={styles.menuItem}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              save as
            </ContextMenuItem>
            <ContextMenuItem className={styles.menuItem} asChild>
              <a
                href={`https://opensea.io/assets/base/0x13dc8261fce63499aa25deb512bb1827b411b83b/${modalTokenID}`}
                target="_blank"
              >
                view on opensea
              </a>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <SaveDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          tokenID={modalTokenID}
        />
      </div>
      <PageFooter />
    </div>
  );
};

export { GalleryPage };
