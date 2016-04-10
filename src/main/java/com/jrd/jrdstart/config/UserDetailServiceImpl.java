package com.jrd.jrdstart.config;

import com.jrd.jrdstart.domain.Account;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 * Created by jakub on 09.04.16.
 */
@Component
public class UserDetailServiceImpl implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        System.out.println("loadUserByUsername =" + name);
        Account account = new Account(name, "password");

        return new AccountUserDetails(account);
    }
}