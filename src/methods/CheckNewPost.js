/* Check if User wanted to create a new Post (Link / Text) */

// Global Scope
import $global from '../$global';

// Data
import EntryList from '../data/EntryList';

// Methods
import UpdateDOM from './UpdateDOM';


const CheckNewPost = () => {
    var newPost = {},
        form = document.querySelector(".submit-form"),
        btnSubmit = form.querySelector(".btn-submit"),
        title = form.querySelector(".title"),
        titleLabel = form.querySelector(".title-label"),
        subreddit = form.querySelector(".subreddit"),
        subredditLabel = form.querySelector(".subreddit-label"),
        url = $global.currentPage === 'newLink' ? form.querySelector(".url") : null,
        text = $global.currentPage === 'newText' ? form.querySelector(".title") : null;

    btnSubmit.onclick = () => {
        if (title.value && subreddit.value) {
            // push new entry
            EntryList.push({
                type: $global.currentPage === 'newLink' ? 'link' : 'text',
                id: _.uniqueId('entry_'),
                topic: title.value,
                voteCount: 0,
                link: $global.currentPage === 'newLink' ? (url.value ? url.value : '') : '(i.redd.it)',
                postedBy: 'john_doe',
                commentsCount: 0,
                subreddit: subreddit.value
            });

            // navigate back to homepage
            $global.currentPage = 'home';
            $global.newSubmit = false;
            UpdateDOM();

        } else {

            // add warning to highligh input fill are empty
            if (!title.value) {
                title.classList.add('alert');
                titleLabel.classList.add('alert');
            }

            if (!subreddit.value) {
                subreddit.classList.add('alert');
                subredditLabel.classList.add('alert');
            }
        }
    };
};

export default CheckNewPost;
