package com.jrd.jrdstart.repository;

import com.jrd.jrdstart.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Created by jakub on 13.04.16.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOneByLogin(String login);

    Optional<User> findOneById(Long userId);

    @Override
    void delete(User t);
}
