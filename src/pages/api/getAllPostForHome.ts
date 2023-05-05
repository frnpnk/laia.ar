// Get the first 20 posts from WordPress, ordered by the date


export async function getAllPostsForHome() {
    let WpUrl: URL = new URL(process.env.WORDPRESS_API_URL)


    const data = await fetch(WpUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
            `
        })
    })

    return data
}