import { ServerItem } from "@/lib/api";
import React, { useState } from "react";
import * as Style from "./index.styled";
import Link from "next/link";

const MovieItem: React.FC<ServerItem> = (props) => {
    const summary = props.summary
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [comment, setComment] = useState("");

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowCommentModal(false);
    }

    return (
        <Link href={`/films/${props.id}`} passHref>
            <Style.Row key={props.id}>
                <Style.ImgCell style={{display: 'grid', justifyItems: 'center'}}><img src={props.small_cover_image} /></Style.ImgCell>
                <Style.Name>
                    <h3> [{props.language}] {props.title_english} ({props.year})</h3>
                    <div><small>{summary.substr(0,100) + (summary.length > 100 ? '...' : '')}</small></div>
                </Style.Name>
                <Style.Cell>{props.genres.join(', ')}</Style.Cell>
                <Style.Cell style={{display: 'grid', justifyItems: 'center'}}>{props.mpa_rating}</Style.Cell>
                <Style.Points style={{display: 'grid', justifyItems: 'center'}}><small>{props.rating}</small></Style.Points>
                <Style.Cell>
                    <Style.CommentButton onClick={(e) => {
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        e.preventDefault();
                        setShowCommentModal(true);
                    }}>

                        <small>Comment</small>
                    </Style.CommentButton>
                </Style.Cell>
            {showCommentModal && (
                <Style.Modal onClick={(e) => {
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                    e.preventDefault();
                }}>
                    <Style.ModalContent>
                        <Style.CloseButton onClick={() => setShowCommentModal(false)}>X</Style.CloseButton>
                        <Style.CommentForm onSubmit={handleCommentSubmit}>
                            <Style.CommentLabel>
                                Comment:
                                <Style.CommentInput value={comment} onChange={(e) => setComment(e.target.value)} />
                            </Style.CommentLabel>
                            <Style.SubmitButton type="submit">Submit</Style.SubmitButton>
                        </Style.CommentForm>
                    </Style.ModalContent>
                </Style.Modal>
            )}
            </Style.Row>
        </Link>
    );
};

export default MovieItem;