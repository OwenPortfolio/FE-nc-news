import {useState} from 'react'
import {sendVote} from '../utils/api'

const VoteButton = (data) => {

    const [votes, setVotes] = useState(data.votes)
    const [voteStatus, setVoteStatus] = useState('');
    const [clicked, setClicked] = useState(false);

    function vote(){
        if(clicked === false){
            setClicked(true);
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
        } else {
            setVoteStatus('You already voted for this');
        }

    }

    return (
        <>
        <button onClick={vote}>Upvote: {votes}</button>
        <h3 id='voteStatus'>{voteStatus}</h3>
        </>
    )
}

export default VoteButton;