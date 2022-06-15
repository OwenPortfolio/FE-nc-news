import {useState} from 'react'
import {sendVote} from '../utils/api'

const VoteButton = (data) => {

    const [votes, setVotes] = useState(data.votes)
    const [voteStatus, setVoteStatus] = useState('');

    function vote(){
        setVotes(votes + 1)
        return sendVote(data.article)
        .then((res) => {
            if(res.status === 200){
                setVoteStatus('Upvoted!')
            } else {
                setVotes(votes)
                setVoteStatus('Something Went Wrong')
            };
            setTimeout(
                function (){
                    setVoteStatus('')
                }, 3000
            )
        })
    }

    return (
        <>
        <button onClick={vote}>Upvote: {votes}</button>
        <h3 id='voteStatus'>{voteStatus}</h3>
        </>
    )
}

export default VoteButton;