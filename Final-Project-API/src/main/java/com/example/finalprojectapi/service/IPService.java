//package com.example.finalprojectapi.service;
//
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import org.springframework.stereotype.Service;
//
//import javax.servlet.http.HttpServletRequest;
//
//
//@Getter
//@Setter
//@NoArgsConstructor
//@Service
//public class IPService {
//    private String[] HEADERS_TO_TRY = {
//            "X-Forwarded-For",
//            "Proxy-Client-IP",
//            "WL-Proxy-Client-IP",
//            "HTTP_X_FORWARDED_FOR",
//            "HTTP_X_FORWARDED",
//            "HTTP_X_CLUSTER_CLIENT_IP",
//            "HTTP_CLIENT_IP",
//            "HTTP_FORWARDED_FOR",
//            "HTTP_FORWARDED",
//            "HTTP_VIA",
//            "REMOTE_ADDR" };
//
//
//    public String getClientIpAddress(HttpServletRequest request) {
//        for (String header : HEADERS_TO_TRY) {
//            String ip = request.getHeader(header);
//            if (ip != null && ip.length() != 0 && !"unknown".equalsIgnoreCase(ip)) {
//                return ip;
//            }
//        }
//        return request.getRemoteAddr();
//    }
//}
