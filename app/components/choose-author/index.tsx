import * as React from "react";

interface ChooseAuthorProps {
    onChange: (author: string) => void;
}

export function ChooseAuthor(props: ChooseAuthorProps) {
    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
        props.onChange(e.target.value);
    }

    return (
        <div>
            <label htmlFor="author">Choose an author:</label>
            <input id="author" type={"text"} onChange={handleOnChange} />
        </div>
    );
}