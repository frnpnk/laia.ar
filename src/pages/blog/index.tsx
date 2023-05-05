import { GetStaticProps,  NextPage } from "next";

interface Props {
    posts: {
        nodes: [
            {
                slug: string;
                title: string;
                date: string;
                content: string;
            }
        ];
    };
}

export const  getStaticProps: GetStaticProps = async ()=> {
    let WpUrl: URL = new URL(process.env.WORDPRESS_API_URL);
    const data = await fetch(WpUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
            query HomePage {
                posts {
                    nodes {
                        slug
                        title
                        date
                        content
                        }
                    }
                }
            `,
        }),
    });

    const json = await data.json();

    return {
        props: {
            posts: json.data.posts,
        },
        revalidate: 10,
    };
}



const Blog: NextPage<Props> = ({ posts }) => {
    // console.log(posts);

    return (
        <>
            <h1>Blog</h1>
            {posts.nodes.map((post) => {
                return (
                    <ul key ={post.slug}>
                        <li>{post.title}</li>
                        <article
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        ></article>
                    </ul>
                );
            })}
        </>
    );
};

export default Blog;
