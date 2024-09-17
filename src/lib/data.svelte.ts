interface DataResponse {
    id: number
    title: string
    body: string
    tags: Array<string>
    reactions: {
        likes: number
        dislikes: number
    }
    views: number
    userId: number
}

export function useData() {
    let data = $state<DataResponse | null>(null);

    $effect(() => {
        async function fetchData() {
            if (data) return data;

            const res = await fetch("https://dummyjson.com/posts/1");
            const json = await res.json() as DataResponse;

            data = json;
        }

        fetchData();
    });



    return {
        get data() {
            return data;
        }
    }
}