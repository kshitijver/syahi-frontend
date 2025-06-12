interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    username: string;
    createdAt: Date;
    notes: NoteId[];
    isDeactivated: boolean;
}

type NoteId = Note['id'];
type UserId = User['id'];

interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    author: {
        id: UserId;
        name: string;
        link: string | null;
    };
    tags: string[];
    icon: string;
    backgroundImage: string;
    isTrashed: boolean;
}