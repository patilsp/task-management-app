import { databases } from "@/appwrite";

export const getTodoGroupedByColumn = async () => {
        const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODO_COLLECTION_ID!
    );

    console.log(data);

    const todos = data.documents;

    const columns = todos.reduce((acc, todo) => {
            if(!acc.get(todo.status)){
                acc.set(todo.status, {
                    id: todo.status,
                    todos: []
                })
            }
            acc.get(todo.status)!.todos.push({
                $id: todo.$id,
                $createdAt: todo.$createdAt,
                title: todo.title,
                status:todo.status,

                // get the image if it exists
                ...(todo.image && { image: JSON.parse(todo.image) })

            })

            return acc;

    }, new Map<TypedColumn, Column>)

//    if columns dosent have anything display empty array

    const columnTypes: TypedColumn[] = ["todos", "inprogress","done"];
        for (const columnType of columnTypes) {
            if(!columns.get(columnType)){
                columns.set(columnType, {
                    id: columnType,
                    todos: [],
                });
            }
        }

        const SortedColumns = new Map(
            Array.from(columns.entries()).sort(
                (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
            )
        );
        
        const board: Board = {
            columns: SortedColumns
        }

        return board;

    };