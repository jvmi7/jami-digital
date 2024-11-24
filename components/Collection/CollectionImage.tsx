import Image from 'next/image';

interface Props {
  imagePath: string;
  background: string;
  height: string;
  width: string;
}

const CollectionImage = ({ imagePath, background, height, width }: Props) => {
  return (
    <div style={{ background: background, borderRadius: '16px', height: height, width: width }}>
      <Image
        src={imagePath}
        alt="Collection image"
        width={100}
        height={100}
        style={{ padding: '15%' }}
      />
    </div>
  );
};

export { CollectionImage };
