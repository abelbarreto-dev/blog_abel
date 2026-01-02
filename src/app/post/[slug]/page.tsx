type Slug = {
    slug: string;
}

type PostSlugProps = {
    params: Promise<Slug>;
};

export default async function PostSlugPage({ params }: PostSlugProps) {
    const { slug } = await params;

    return <h1>Rota Dinâmica {slug}</h1>;
}
