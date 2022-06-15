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

            })
        } else {
            setVoteStatus('You Already Voted For This');
        }
        setTimeout(
            function (){
                setVoteStatus('')
            }, 3000
        )
    }

    return (
        <>
        <button onClick={vote}>Upvote: {votes}</button>
        <h4 id='voteStatus'>{voteStatus}</h4>
        </>
    )
}

export default VoteButton;