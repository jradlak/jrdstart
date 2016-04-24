package com.jrd.jrdstart.repository;

import com.jrd.jrdstart.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by jakub on 24.04.16.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
