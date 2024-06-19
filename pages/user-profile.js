export default function UserProfilePage(props){
    return (
        <h1>
            Yudha
        </h1>
    )
}

export async function getServerSideProps(context){
    const {params, req, res} = context;

    return {
        props: {
            username: 'Yudha'
        }
    }
}