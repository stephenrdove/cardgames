import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function  Game({
    // gameId
} : {
    // gameId: number
}) {
    const router = useRouter();
    const gameId = router.query.gameId;
    return (
        <div>
            {gameId}
        </div>
    );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     // const paths = getAllPostIds()
//     return {
//       paths,
//       fallback: false
//     }
//   }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     return {
//         props: {
//             gameId: params.gameId
//         }
//     };
// };

// const Game: NextPage<{ gameId: number }> = (props) => {
//     const router = useRouter();
//     router.gameId;
//     // router.
//     // const { gameId } = router;

//     return (
//         <div>{props.gameId}</div>
//     );
// }

// export default Game;
