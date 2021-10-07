package pl.piomin.samples.security.gateway.config;

import java.time.Duration;
import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.cors.reactive.CorsUtils;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;

import reactor.core.publisher.Mono;
/**
 * @author Thirumal
 */
@Configuration
public class CorsConfig {

  private static final String ALLOWED_HEADERS = "x-requested-with, authorization, Content-Type, Content-Length, Authorization, credential, X-XSRF-TOKEN";
  private static final String ALLOWED_METHODS = "GET, PUT, POST, DELETE, OPTIONS, PATCH";
  private static final String ALLOWED_ORIGIN = "http://localhost:3001";
  private static final String MAX_AGE = "7200"; //2 hours (2 * 60 * 60) 

  // @Bean
  public WebFilter corsFilter() {
    return (ServerWebExchange ctx, WebFilterChain chain) -> {
      return chain.filter(ctx);
    };
  }

  // @Bean
  // public CorsWebFilter corsWebFilter() {
  //   CorsConfiguration corsConfig = new CorsConfiguration();
  //   corsConfig.setAllowedOrigins(Arrays.asList('*'));
  //   corsConfig.setMaxAge(8000L);
  //   corsConfig.addAllowedMethod(ALLOWED_METHODS);
  //   corsConfig.addAllowedHeader(ALLOWED_HEADERS);
  //   corsConfig.setAllowCredentials(true);

  //   UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  //   source.registerCorsConfiguration("/**", corsConfig);

  //   return new CorsWebFilter(source);
  // }

}
