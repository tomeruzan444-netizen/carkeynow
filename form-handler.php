<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://carkeynow.co.il');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$to = 'ben3n4456@gmail.com';

// Plain-text email: strip CR/LF so nothing can break the body or headers,
// but do NOT html-escape - that turned quotes into &quot; inside the mail.
function clean($v, $max = 400) {
    $v = str_replace(["\r", "\n"], ' ', (string) $v);
    return mb_substr(trim($v), 0, $max);
}

function multiline($v, $max = 2000) {
    $v = str_replace("\r\n", "\n", (string) $v);
    return mb_substr(trim($v), 0, $max);
}

$name    = clean($_POST['name']    ?? '', 120);
$phone   = clean($_POST['phone']   ?? '', 40);
$city    = clean($_POST['city']    ?? '', 120);
$service = clean($_POST['service'] ?? '', 120);
$source  = clean($_POST['source']  ?? '', 60);
$page    = clean($_POST['page']    ?? '', 300);
$message = multiline($_POST['message'] ?? '');

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

// Which page the lead came from. The form now posts a decoded path; the referrer
// is the fallback and arrives percent-encoded, so decode it before printing.
if ($page === '') {
    $ref = $_SERVER['HTTP_REFERER'] ?? '';
    if ($ref !== '') {
        $path = parse_url($ref, PHP_URL_PATH);
        $page = clean(rawurldecode($path !== null ? $path : $ref), 300);
    }
}
if ($page === '') $page = 'לא ידוע';

$forms = [
    'page-form'      => 'טופס בגוף העמוד',
    'sidebar-form'   => 'טופס בסייד-בר',
    'floating-form'  => 'טופס צף (השאירו פרטים)',
];
$source_label = $forms[$source] ?? ($source !== '' ? $source : 'לא ידוע');

// City goes in the subject too, so it shows in the inbox list without opening.
$where   = $city !== '' ? $city : 'עיר לא צוינה';
$subject = "🔑 ליד חדש | {$where} | {$name} | {$phone}";

$body  = "================================================\n";
$body .= "   ליד חדש מאתר מפתח עכשיו - carkeynow.co.il  \n";
$body .= "================================================\n\n";
$body .= "שם:      {$name}\n";
$body .= "טלפון:   {$phone}\n";
// Always printed, even when empty, so an empty field is distinguishable
// from a broken one.
$body .= "עיר:     " . ($city !== '' ? $city : 'לא צוין') . "\n";
if ($service !== '') $body .= "שירות:   {$service}\n";
if ($message !== '') $body .= "הודעה:   {$message}\n";
$body .= "\n------------------------------------------------\n";
$body .= "מקור:    carkeynow.co.il\n";
$body .= "עמוד:    {$page}\n";
$body .= "טופס:    {$source_label}\n";
$body .= "זמן:     " . date('d/m/Y H:i:s') . "\n";
$body .= "================================================\n";

$headers  = "From: =?UTF-8?B?" . base64_encode("מפתח עכשיו") . "?= <noreply@carkeynow.co.il>\r\n";
$headers .= "Reply-To: noreply@carkeynow.co.il\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'תודה! נחזור אליכם בהקדם.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'שגיאה בשליחה. אנא התקשרו אלינו ישירות.']);
}
