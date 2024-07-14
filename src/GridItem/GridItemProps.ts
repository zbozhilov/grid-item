export type imageProps = {
    id: number;
    url: string;
    alt: string;
};

export interface GridItemProps {
    item: {
        title?: string,
        description?: string,
        images: imageProps[];
    };
}
