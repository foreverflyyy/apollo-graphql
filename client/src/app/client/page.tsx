"use client";

import {gql} from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export const dynamic = "force-dynamic";

const query = gql`
    query ExampleQuery {
        continents {
            name,
            code
        }
    }
`

export default function PollPage() {
    const {data: {continents}}: {data: {continents: any}} = useSuspenseQuery(query);

    return (
        <div>
            {continents?.map((item: any) => (
                <div>
                    <div className={"font-bold text-xl"}>{item.name}</div>
                    <div className={"font-bold text-xl"}>{item.code}</div>
                </div>
            ))}
        </div>
    );
}