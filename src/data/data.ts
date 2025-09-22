import ali from '../assets/images/avatar-ali.png'
import anisha from '../assets/images/avatar-anisha.png'
import richard from '../assets/images/avatar-richard.png'
import shanai from '../assets/images/avatar-shanai.png'

export type testimonialDataType = {
    id:number;
    image: string;
    name: string;
    comment: string;
}

export const testimonialData: testimonialDataType[] = [
    {
        id: 1,
        image: anisha,
        name: "Anisha Li",
        comment:'“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
    },
    {
        id: 2,
        image: ali,
        name: "Ali Bravo",
        comment:'“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
    },
    {
        id: 3,
        image: richard,
        name: "Richard Watts",
        comment:'“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
    },
    {
        id: 4,
        image: shanai,
        name: "Shanai Gough",
        comment:'“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
    }
]