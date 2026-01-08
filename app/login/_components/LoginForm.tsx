"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import LoginHeader from "./LoginHeader";
import SignupGuide from "./SignupGuide";
import LoginField from "./LoginField";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md">
      <Card className="bg-white shadow-lg">
        <LoginHeader />
        <CardContent>
          {/* 회원번호 로그인 */}
          <LoginField />
          {/* 찾기 및 회원가입 링크 */}
          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm">
              <Link
                href="/find-account?tab=member"
                className="text-gray-600 hover:text-blue-600"
              >
                회원번호 찾기
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/find-account?tab=password"
                className="text-gray-600 hover:text-blue-600"
              >
                비밀번호 찾기
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/signup"
                className="text-gray-600 hover:text-blue-600"
              >
                회원가입
              </Link>
            </div>
          </div>

          {/* 추가 안내 */}
          <div className="text-center text-xs text-gray-500 mt-6">
            <p>
              로그인 시 RAIL-O의 이용약관 및 개인정보처리방침에 동의하게 됩니다.
            </p>
          </div>
        </CardContent>
      </Card>
      <SignupGuide />
    </div>
  );
};

export default LoginForm;
