import {useState } from 'react';
import {deleteComment} from '../utils/api';

const DeleteComment = (props) => {

    const {setDeleted, id} = props;

    const [deleteStatus, setDeleteStatus] = useState('');

    function removeComment(event){
        
        if(window.confirm('Are you sure?')){
            deleteComment(id)
            .then((res) => {
                if(res.status === 204){
                    setDeleteStatus('Comment Deleted')
                    setTimeout(
                        function (){
                            setDeleteStatus('')
                            setDeleted(true)
                        }, 1500
                    )

                } else {
                    setDeleteStatus('Something Went Wrong')
                    setTimeout(
                        function (){
                            setDeleteStatus('')
                        }, 2500
                    )
                }
            })
        }

    }
    if(props.user === props.author) {
        return (
        <>
        <h2>{deleteStatus}</h2>
        <button onClick={removeComment}>Delete Comment?</button>
        </>

        )
    }    

}

export default DeleteComment;