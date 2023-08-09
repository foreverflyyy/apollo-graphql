import FormForRequest from "@/common/components/FormForRequest";
import {gql} from "@apollo/client";
import {getClient} from "@/common/lib/apollo-client";

const getInfo = async () => {
    const userQuery = gql`
        query ExampleQuery {
          continents {
            name,
            code
          }
        }
    `
    const { data } = await getClient().query({ query: userQuery });
    return data;
}

export default function Page() {

    const info: any = getInfo();

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h2>Enter info</h2>
            <FormForRequest/>
            {/*{posts.map((post: any) => (
                <p>{post.name}</p>
            ))}*/}
        </div>
    )
}