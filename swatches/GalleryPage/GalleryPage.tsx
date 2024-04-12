import { useAccount } from 'wagmi';
import Header from '../Header/Header';
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

const GalleryPage = () => {
  const { address } = useAccount();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [modalTokenID, setModalTokenID] = useState<string>('');

  const { data: nfts, isFetching } = useEvmWalletNFTs({
    chain: '0x2105',
    address: '0x2245831B784B4E1030844206288BC1B23b11DeF7' || '',
    tokenAddresses: ['0x13dc8261FCe63499Aa25DEB512bb1827B411b83B'],
  });

  useEffect(() => {
    if (!address) {
      router.push('/swatches');
    }
  }, [address, router]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>a gallery of swatches,</h1>
          <p>
            curated by <span>you</span>.
          </p>
        </div>

        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className={styles.galleryContainer}>
              {nfts?.map((_nft: any, index: number) => {
                const nft = _nft._data;
                const imageUrl = nft.metadata?.image || '';
                const name = nft.metadata?.name || '';
                const animationDelay = index * 0.05;
                console.log(nft);
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
            <ContextMenuItem className={styles.menuItem}>
              view on opensea
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <SaveDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          tokenID={modalTokenID}
        />
      </div>
    </div>
  );
};

export { GalleryPage };
