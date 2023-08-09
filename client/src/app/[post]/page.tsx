import FormForRequest from "@/common/components/FormForRequest";
import {gql} from "@apollo/client";
import {getClient} from "@/common/lib/apollo-client";

const query = gql`
    query ExampleQuery {
      continents {
        name,
        code
      }
    }
`

interface Response {
    continents: { name: string; code: string;}[];
}

export default async function Page() {

    const {data} = await getClient().query<Response>({query});
    console.log(data.continents);

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