import Layout from "../components/layout/Layout";
import BlogItem from "../components/blogItem/BlogItem";
import useSWR from "swr";

const index = () => {

    const { data, error } = useSWR('/api/blogs')

    if (error) return <h1>Something went very wrong!</h1>

    return(<Layout>
        <div>
            {data && data.map(item => <BlogItem {...item}/>)}
        </div>
    </Layout>)
}

export default index