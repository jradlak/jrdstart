package com.jrd.jrdstart.security;

/**
 * Created by jakub on 13.04.16.
 */

import com.jrd.jrdstart.domain.User;
import com.jrd.jrdstart.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * Created by jakub on 09.04.16.
 */
@Component("userDetailsService")
public class UserDetailServiceImpl implements UserDetailsService {

    private final Logger log = LoggerFactory.getLogger(UserDetailServiceImpl.class);

    @Inject
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        log.debug("Authenticating {}", login);

        String lowercaseLogin = login.toLowerCase();
        Optional<User> userFromDatabase = userRepository.findOneByLogin(lowercaseLogin);


        return userFromDatabase.map(user -> {
            //if (!user.getActivated()) {
            //    throw new UserNotActivatedException("User " + lowercaseLogin + " was not activated");
            //}
            List<GrantedAuthority> grantedAuthorities = new ArrayList<GrantedAuthority>(
                    Arrays.asList(
                            new GrantedAuthority() {
                                @Override
                                public String getAuthority() {
                                    return "USER";
                                }
                            }));

            return new org.springframework.security.core.userdetails.User(lowercaseLogin,
                    user.getPassword(),
                    grantedAuthorities);

        }).orElseThrow(() -> new UsernameNotFoundException("User " + lowercaseLogin + " was not found in the " +
                "database"));
    }
}
