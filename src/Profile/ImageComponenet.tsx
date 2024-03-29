import styles from './ImageComponent.module.css'
interface ImageData {
    image: string;
}

interface ImageProps extends ImageData {
    onClick: () => void;
    isSelected: boolean;
}

export const ImageComponent = ({ image, onClick, isSelected }: ImageProps) => {
    const style = isSelected ? styles.selectedItem : styles.avatarItem;

    return (
        <div className={style} style={{backgroundImage: `url(${image})`}} onClick={onClick}></div>
        // <img
        //     className={style}
        //     src={image}
        //     key={image}
        //     alt={image}
        //     onClick={onClick}
        // />

    );
};