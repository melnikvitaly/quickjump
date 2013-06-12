#pragma once
#include "stdafx.h"

class Logger
{
	public:
		static void WriteError(StringEx str);
		static void WriteDebug(StringEx str);
	private:
		Logger(void);
		~Logger(void);
};

