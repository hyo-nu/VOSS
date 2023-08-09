package com.yukgaejang.voss.domain.freeboard.repository;

import com.yukgaejang.voss.domain.freeboard.repository.entity.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostLikeRepository extends JpaRepository<PostLike, Long>, PostLikeSupportRepository {
}